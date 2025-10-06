# `gateway` Submodule <a name="`gateway` Submodule" id="@cdktf/provider-upcloud.gateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Gateway <a name="Gateway" id="@cdktf/provider-upcloud.gateway.Gateway"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway upcloud_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.Gateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  features: typing.List[str],
  name: str,
  router: GatewayRouter,
  zone: str,
  address: GatewayAddress = None,
  configured_status: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  plan: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.features">features</a></code> | <code>typing.List[str]</code> | Features enabled for the gateway. Note that VPN feature is currently in beta, for more details see https://upcloud.com/resources/docs/networking#nat-and-vpn-gateways. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Gateway name. Needs to be unique within the account. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.router">router</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone in which the gateway will be hosted, e.g. `de-fra1`. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.address">address</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.configuredStatus">configured_status</a></code> | <code>str</code> | The service configured status indicates the service's current intended status. Managed by the customer. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#id Gateway#id}. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the network gateway. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Gateway pricing plan. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.features"></a>

- *Type:* typing.List[str]

Features enabled for the gateway. Note that VPN feature is currently in beta, for more details see https://upcloud.com/resources/docs/networking#nat-and-vpn-gateways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#features Gateway#features}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.name"></a>

- *Type:* str

Gateway name. Needs to be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#name Gateway#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.router"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#router Gateway#router}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.zone"></a>

- *Type:* str

Zone in which the gateway will be hosted, e.g. `de-fra1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#zone Gateway#zone}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.address"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#address Gateway#address}

---

##### `configured_status`<sup>Optional</sup> <a name="configured_status" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.configuredStatus"></a>

- *Type:* str

The service configured status indicates the service's current intended status. Managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#configured_status Gateway#configured_status}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#id Gateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the network gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#labels Gateway#labels}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.gateway.Gateway.Initializer.parameter.plan"></a>

- *Type:* str

Gateway pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#plan Gateway#plan}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.putAddress">put_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.putRouter">put_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.resetConfiguredStatus">reset_configured_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.resetPlan">reset_plan</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gateway.Gateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.gateway.Gateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gateway.Gateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gateway.Gateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.gateway.Gateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.gateway.Gateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.gateway.Gateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.gateway.Gateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.gateway.Gateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.gateway.Gateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.gateway.Gateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.gateway.Gateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.gateway.Gateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.gateway.Gateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gateway.Gateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.Gateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.gateway.Gateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.gateway.Gateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.gateway.Gateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gateway.Gateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.gateway.Gateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_address` <a name="put_address" id="@cdktf/provider-upcloud.gateway.Gateway.putAddress"></a>

```python
def put_address(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.Gateway.putAddress.parameter.name"></a>

- *Type:* str

Name of the IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#name Gateway#name}

---

##### `put_router` <a name="put_router" id="@cdktf/provider-upcloud.gateway.Gateway.putRouter"></a>

```python
def put_router(
  id: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.putRouter.parameter.id"></a>

- *Type:* str

ID of the router attached to the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#id Gateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-upcloud.gateway.Gateway.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_configured_status` <a name="reset_configured_status" id="@cdktf/provider-upcloud.gateway.Gateway.resetConfiguredStatus"></a>

```python
def reset_configured_status() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-upcloud.gateway.Gateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-upcloud.gateway.Gateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-upcloud.gateway.Gateway.resetPlan"></a>

```python
def reset_plan() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.gateway.Gateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.Gateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gateway.Gateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.gateway.Gateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.Gateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gateway.Gateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.gateway.Gateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.Gateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gateway.Gateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.gateway.Gateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.Gateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gateway.Gateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.gateway.Gateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Gateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.gateway.Gateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Gateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gateway.Gateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Gateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.address">address</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference">GatewayAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList">GatewayAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.connections">connections</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.operationalState">operational_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.router">router</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference">GatewayRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.addressInput">address_input</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.configuredStatusInput">configured_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.featuresInput">features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.routerInput">router_input</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.configuredStatus">configured_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.features">features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.gateway.Gateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.gateway.Gateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gateway.Gateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.gateway.Gateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.gateway.Gateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.gateway.Gateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.gateway.Gateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gateway.Gateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gateway.Gateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gateway.Gateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gateway.Gateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gateway.Gateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gateway.Gateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gateway.Gateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.gateway.Gateway.property.address"></a>

```python
address: GatewayAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference">GatewayAddressOutputReference</a>

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-upcloud.gateway.Gateway.property.addresses"></a>

```python
addresses: GatewayAddressesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList">GatewayAddressesList</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-upcloud.gateway.Gateway.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operational_state`<sup>Required</sup> <a name="operational_state" id="@cdktf/provider-upcloud.gateway.Gateway.property.operationalState"></a>

```python
operational_state: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-upcloud.gateway.Gateway.property.router"></a>

```python
router: GatewayRouterOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference">GatewayRouterOutputReference</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.addressInput"></a>

```python
address_input: GatewayAddress
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a>

---

##### `configured_status_input`<sup>Optional</sup> <a name="configured_status_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.configuredStatusInput"></a>

```python
configured_status_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.featuresInput"></a>

```python
features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.routerInput"></a>

```python
router_input: GatewayRouter
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-upcloud.gateway.Gateway.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `configured_status`<sup>Required</sup> <a name="configured_status" id="@cdktf/provider-upcloud.gateway.Gateway.property.configuredStatus"></a>

```python
configured_status: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-upcloud.gateway.Gateway.property.features"></a>

```python
features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.Gateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.gateway.Gateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.Gateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.gateway.Gateway.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.gateway.Gateway.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.Gateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.gateway.Gateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayAddress <a name="GatewayAddress" id="@cdktf/provider-upcloud.gateway.GatewayAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gateway.GatewayAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayAddress(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddress.property.name">name</a></code> | <code>str</code> | Name of the IP address. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.GatewayAddress.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#name Gateway#name}

---

### GatewayAddresses <a name="GatewayAddresses" id="@cdktf/provider-upcloud.gateway.GatewayAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gateway.GatewayAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayAddresses()
```


### GatewayConfig <a name="GatewayConfig" id="@cdktf/provider-upcloud.gateway.GatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gateway.GatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  features: typing.List[str],
  name: str,
  router: GatewayRouter,
  zone: str,
  address: GatewayAddress = None,
  configured_status: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  plan: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.features">features</a></code> | <code>typing.List[str]</code> | Features enabled for the gateway. Note that VPN feature is currently in beta, for more details see https://upcloud.com/resources/docs/networking#nat-and-vpn-gateways. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.name">name</a></code> | <code>str</code> | Gateway name. Needs to be unique within the account. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.router">router</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.zone">zone</a></code> | <code>str</code> | Zone in which the gateway will be hosted, e.g. `de-fra1`. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.address">address</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.configuredStatus">configured_status</a></code> | <code>str</code> | The service configured status indicates the service's current intended status. Managed by the customer. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#id Gateway#id}. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User defined key-value pairs to classify the network gateway. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayConfig.property.plan">plan</a></code> | <code>str</code> | Gateway pricing plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.features"></a>

```python
features: typing.List[str]
```

- *Type:* typing.List[str]

Features enabled for the gateway. Note that VPN feature is currently in beta, for more details see https://upcloud.com/resources/docs/networking#nat-and-vpn-gateways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#features Gateway#features}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Gateway name. Needs to be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#name Gateway#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.router"></a>

```python
router: GatewayRouter
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#router Gateway#router}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone in which the gateway will be hosted, e.g. `de-fra1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#zone Gateway#zone}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.address"></a>

```python
address: GatewayAddress
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#address Gateway#address}

---

##### `configured_status`<sup>Optional</sup> <a name="configured_status" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.configuredStatus"></a>

```python
configured_status: str
```

- *Type:* str

The service configured status indicates the service's current intended status. Managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#configured_status Gateway#configured_status}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#id Gateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined key-value pairs to classify the network gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#labels Gateway#labels}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.gateway.GatewayConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Gateway pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#plan Gateway#plan}

---

### GatewayRouter <a name="GatewayRouter" id="@cdktf/provider-upcloud.gateway.GatewayRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gateway.GatewayRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayRouter(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouter.property.id">id</a></code> | <code>str</code> | ID of the router attached to the gateway. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.GatewayRouter.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the router attached to the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/gateway#id Gateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayAddressesList <a name="GatewayAddressesList" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GatewayAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gateway.GatewayAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GatewayAddressesOutputReference <a name="GatewayAddressesOutputReference" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddresses">GatewayAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gateway.GatewayAddressesOutputReference.property.internalValue"></a>

```python
internal_value: GatewayAddresses
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddresses">GatewayAddresses</a>

---


### GatewayAddressOutputReference <a name="GatewayAddressOutputReference" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gateway.GatewayAddressOutputReference.property.internalValue"></a>

```python
internal_value: GatewayAddress
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayAddress">GatewayAddress</a>

---


### GatewayRouterOutputReference <a name="GatewayRouterOutputReference" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import gateway

gateway.GatewayRouterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-upcloud.gateway.GatewayRouterOutputReference.property.internalValue"></a>

```python
internal_value: GatewayRouter
```

- *Type:* <a href="#@cdktf/provider-upcloud.gateway.GatewayRouter">GatewayRouter</a>

---



