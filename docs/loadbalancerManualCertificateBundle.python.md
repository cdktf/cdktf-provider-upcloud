# `loadbalancerManualCertificateBundle` Submodule <a name="`loadbalancerManualCertificateBundle` Submodule" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerManualCertificateBundle <a name="LoadbalancerManualCertificateBundle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_manual_certificate_bundle

loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate: str,
  name: str,
  private_key: str,
  intermediates: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Certificate as base64 encoded string. Must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the certificate bundle. Must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Private key as base64 encoded string. Must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.intermediates">intermediates</a></code> | <code>str</code> | Intermediate certificates as base64 encoded string. Must be in PEM format. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.certificate"></a>

- *Type:* str

Certificate as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#certificate LoadbalancerManualCertificateBundle#certificate}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.name"></a>

- *Type:* str

The name of the certificate bundle. Must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#name LoadbalancerManualCertificateBundle#name}

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.privateKey"></a>

- *Type:* str

Private key as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#private_key LoadbalancerManualCertificateBundle#private_key}

---

##### `intermediates`<sup>Optional</sup> <a name="intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.intermediates"></a>

- *Type:* str

Intermediate certificates as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#intermediates LoadbalancerManualCertificateBundle#intermediates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetIntermediates">reset_intermediates</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_intermediates` <a name="reset_intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetIntermediates"></a>

```python
def reset_intermediates() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadbalancerManualCertificateBundle resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_manual_certificate_bundle

loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_manual_certificate_bundle

loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_manual_certificate_bundle

loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_manual_certificate_bundle

loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadbalancerManualCertificateBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadbalancerManualCertificateBundle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadbalancerManualCertificateBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerManualCertificateBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.operationalState">operational_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediatesInput">intermediates_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediates">intermediates</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `operational_state`<sup>Required</sup> <a name="operational_state" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.operationalState"></a>

```python
operational_state: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `intermediates_input`<sup>Optional</sup> <a name="intermediates_input" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediatesInput"></a>

```python
intermediates_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `intermediates`<sup>Required</sup> <a name="intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediates"></a>

```python
intermediates: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerManualCertificateBundleConfig <a name="LoadbalancerManualCertificateBundleConfig" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_upcloud import loadbalancer_manual_certificate_bundle

loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate: str,
  name: str,
  private_key: str,
  intermediates: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.certificate">certificate</a></code> | <code>str</code> | Certificate as base64 encoded string. Must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.name">name</a></code> | <code>str</code> | The name of the certificate bundle. Must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.privateKey">private_key</a></code> | <code>str</code> | Private key as base64 encoded string. Must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.intermediates">intermediates</a></code> | <code>str</code> | Intermediate certificates as base64 encoded string. Must be in PEM format. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Certificate as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#certificate LoadbalancerManualCertificateBundle#certificate}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the certificate bundle. Must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#name LoadbalancerManualCertificateBundle#name}

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Private key as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#private_key LoadbalancerManualCertificateBundle#private_key}

---

##### `intermediates`<sup>Optional</sup> <a name="intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.intermediates"></a>

```python
intermediates: str
```

- *Type:* str

Intermediate certificates as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_manual_certificate_bundle#intermediates LoadbalancerManualCertificateBundle#intermediates}

---



