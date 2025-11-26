# `firewallRules` Submodule <a name="`firewallRules` Submodule" id="@cdktf/provider-upcloud.firewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallRules <a name="FirewallRules" id="@cdktf/provider-upcloud.firewallRules.FirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules upcloud_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRules;

FirewallRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serverId(java.lang.String)
//  .firewallRule(IResolvable|java.util.List<FirewallRulesFirewallRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | The UUID of the server to be protected with the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.firewallRule">firewallRule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>></code> | firewall_rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

The UUID of the server to be protected with the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `firewallRule`<sup>Optional</sup> <a name="firewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.firewallRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>>

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule">putFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetFirewallRule">resetFirewallRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFirewallRule` <a name="putFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule"></a>

```java
public void putFirewallRule(IResolvable|java.util.List<FirewallRulesFirewallRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>>

---

##### `resetFirewallRule` <a name="resetFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetFirewallRule"></a>

```java
public void resetFirewallRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRules;

FirewallRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRules;

FirewallRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRules;

FirewallRules.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRules;

FirewallRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirewallRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirewallRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule">firewallRule</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput">firewallRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallRule`<sup>Required</sup> <a name="firewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule"></a>

```java
public FirewallRulesFirewallRuleList getFirewallRule();
```

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `firewallRuleInput`<sup>Optional</sup> <a name="firewallRuleInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput"></a>

```java
public IResolvable|java.util.List<FirewallRulesFirewallRule> getFirewallRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>>

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallRulesConfig <a name="FirewallRulesConfig" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRulesConfig;

FirewallRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serverId(java.lang.String)
//  .firewallRule(IResolvable|java.util.List<FirewallRulesFirewallRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | The UUID of the server to be protected with the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule">firewallRule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>></code> | firewall_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

The UUID of the server to be protected with the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `firewallRule`<sup>Optional</sup> <a name="firewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule"></a>

```java
public IResolvable|java.util.List<FirewallRulesFirewallRule> getFirewallRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>>

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

### FirewallRulesFirewallRule <a name="FirewallRulesFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRulesFirewallRule;

FirewallRulesFirewallRule.builder()
    .action(java.lang.String)
    .direction(java.lang.String)
//  .comment(java.lang.String)
//  .destinationAddressEnd(java.lang.String)
//  .destinationAddressStart(java.lang.String)
//  .destinationPortEnd(java.lang.String)
//  .destinationPortStart(java.lang.String)
//  .family(java.lang.String)
//  .icmpType(java.lang.String)
//  .protocol(java.lang.String)
//  .sourceAddressEnd(java.lang.String)
//  .sourceAddressStart(java.lang.String)
//  .sourcePortEnd(java.lang.String)
//  .sourcePortStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action">action</a></code> | <code>java.lang.String</code> | Action to take if the rule conditions are met. Valid values `accept \| drop`. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction of network traffic this rule will be applied to. Valid values are `in` and `out`. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment for the rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd">destinationAddressEnd</a></code> | <code>java.lang.String</code> | The destination address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart">destinationAddressStart</a></code> | <code>java.lang.String</code> | The destination address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd">destinationPortEnd</a></code> | <code>java.lang.String</code> | The destination port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart">destinationPortStart</a></code> | <code>java.lang.String</code> | The destination port range starts from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family">family</a></code> | <code>java.lang.String</code> | The address family of new firewall rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | The ICMP type of the rule. Only valid if protocol is ICMP. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol of the rule. Possible values are `` (empty), `tcp`, `udp`, `icmp`. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd">sourceAddressEnd</a></code> | <code>java.lang.String</code> | The source address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart">sourceAddressStart</a></code> | <code>java.lang.String</code> | The source address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd">sourcePortEnd</a></code> | <code>java.lang.String</code> | The source port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart">sourcePortStart</a></code> | <code>java.lang.String</code> | The source port range starts from this port number. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to take if the rule conditions are met. Valid values `accept | drop`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#action FirewallRules#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction of network traffic this rule will be applied to. Valid values are `in` and `out`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#direction FirewallRules#direction}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#comment FirewallRules#comment}

---

##### `destinationAddressEnd`<sup>Optional</sup> <a name="destinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd"></a>

```java
public java.lang.String getDestinationAddressEnd();
```

- *Type:* java.lang.String

The destination address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#destination_address_end FirewallRules#destination_address_end}

---

##### `destinationAddressStart`<sup>Optional</sup> <a name="destinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart"></a>

```java
public java.lang.String getDestinationAddressStart();
```

- *Type:* java.lang.String

The destination address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#destination_address_start FirewallRules#destination_address_start}

---

##### `destinationPortEnd`<sup>Optional</sup> <a name="destinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd"></a>

```java
public java.lang.String getDestinationPortEnd();
```

- *Type:* java.lang.String

The destination port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#destination_port_end FirewallRules#destination_port_end}

---

##### `destinationPortStart`<sup>Optional</sup> <a name="destinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart"></a>

```java
public java.lang.String getDestinationPortStart();
```

- *Type:* java.lang.String

The destination port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#destination_port_start FirewallRules#destination_port_start}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

The address family of new firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#family FirewallRules#family}

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

The ICMP type of the rule. Only valid if protocol is ICMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#icmp_type FirewallRules#icmp_type}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol of the rule. Possible values are `` (empty), `tcp`, `udp`, `icmp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#protocol FirewallRules#protocol}

---

##### `sourceAddressEnd`<sup>Optional</sup> <a name="sourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd"></a>

```java
public java.lang.String getSourceAddressEnd();
```

- *Type:* java.lang.String

The source address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#source_address_end FirewallRules#source_address_end}

---

##### `sourceAddressStart`<sup>Optional</sup> <a name="sourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart"></a>

```java
public java.lang.String getSourceAddressStart();
```

- *Type:* java.lang.String

The source address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#source_address_start FirewallRules#source_address_start}

---

##### `sourcePortEnd`<sup>Optional</sup> <a name="sourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd"></a>

```java
public java.lang.String getSourcePortEnd();
```

- *Type:* java.lang.String

The source port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#source_port_end FirewallRules#source_port_end}

---

##### `sourcePortStart`<sup>Optional</sup> <a name="sourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart"></a>

```java
public java.lang.String getSourcePortStart();
```

- *Type:* java.lang.String

The source port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/firewall_rules#source_port_start FirewallRules#source_port_start}

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallRulesFirewallRuleList <a name="FirewallRulesFirewallRuleList" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRulesFirewallRuleList;

new FirewallRulesFirewallRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get"></a>

```java
public FirewallRulesFirewallRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FirewallRulesFirewallRule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>>

---


### FirewallRulesFirewallRuleOutputReference <a name="FirewallRulesFirewallRuleOutputReference" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.firewall_rules.FirewallRulesFirewallRuleOutputReference;

new FirewallRulesFirewallRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd">resetDestinationAddressEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart">resetDestinationAddressStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd">resetDestinationPortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart">resetDestinationPortStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd">resetSourceAddressEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart">resetSourceAddressStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd">resetSourcePortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart">resetSourcePortStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetDestinationAddressEnd` <a name="resetDestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd"></a>

```java
public void resetDestinationAddressEnd()
```

##### `resetDestinationAddressStart` <a name="resetDestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart"></a>

```java
public void resetDestinationAddressStart()
```

##### `resetDestinationPortEnd` <a name="resetDestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd"></a>

```java
public void resetDestinationPortEnd()
```

##### `resetDestinationPortStart` <a name="resetDestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart"></a>

```java
public void resetDestinationPortStart()
```

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily"></a>

```java
public void resetFamily()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSourceAddressEnd` <a name="resetSourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd"></a>

```java
public void resetSourceAddressEnd()
```

##### `resetSourceAddressStart` <a name="resetSourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart"></a>

```java
public void resetSourceAddressStart()
```

##### `resetSourcePortEnd` <a name="resetSourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd"></a>

```java
public void resetSourcePortEnd()
```

##### `resetSourcePortStart` <a name="resetSourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart"></a>

```java
public void resetSourcePortStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput">destinationAddressEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput">destinationAddressStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput">destinationPortEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput">destinationPortStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput">sourceAddressEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput">sourceAddressStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput">sourcePortEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput">sourcePortStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd">destinationAddressEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart">destinationAddressStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd">destinationPortEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart">destinationPortStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd">sourceAddressEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart">sourceAddressStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd">sourcePortEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart">sourcePortStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressEndInput`<sup>Optional</sup> <a name="destinationAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput"></a>

```java
public java.lang.String getDestinationAddressEndInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressStartInput`<sup>Optional</sup> <a name="destinationAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput"></a>

```java
public java.lang.String getDestinationAddressStartInput();
```

- *Type:* java.lang.String

---

##### `destinationPortEndInput`<sup>Optional</sup> <a name="destinationPortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput"></a>

```java
public java.lang.String getDestinationPortEndInput();
```

- *Type:* java.lang.String

---

##### `destinationPortStartInput`<sup>Optional</sup> <a name="destinationPortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput"></a>

```java
public java.lang.String getDestinationPortStartInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput"></a>

```java
public java.lang.String getIcmpTypeInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceAddressEndInput`<sup>Optional</sup> <a name="sourceAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput"></a>

```java
public java.lang.String getSourceAddressEndInput();
```

- *Type:* java.lang.String

---

##### `sourceAddressStartInput`<sup>Optional</sup> <a name="sourceAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput"></a>

```java
public java.lang.String getSourceAddressStartInput();
```

- *Type:* java.lang.String

---

##### `sourcePortEndInput`<sup>Optional</sup> <a name="sourcePortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput"></a>

```java
public java.lang.String getSourcePortEndInput();
```

- *Type:* java.lang.String

---

##### `sourcePortStartInput`<sup>Optional</sup> <a name="sourcePortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput"></a>

```java
public java.lang.String getSourcePortStartInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `destinationAddressEnd`<sup>Required</sup> <a name="destinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd"></a>

```java
public java.lang.String getDestinationAddressEnd();
```

- *Type:* java.lang.String

---

##### `destinationAddressStart`<sup>Required</sup> <a name="destinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart"></a>

```java
public java.lang.String getDestinationAddressStart();
```

- *Type:* java.lang.String

---

##### `destinationPortEnd`<sup>Required</sup> <a name="destinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd"></a>

```java
public java.lang.String getDestinationPortEnd();
```

- *Type:* java.lang.String

---

##### `destinationPortStart`<sup>Required</sup> <a name="destinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart"></a>

```java
public java.lang.String getDestinationPortStart();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceAddressEnd`<sup>Required</sup> <a name="sourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd"></a>

```java
public java.lang.String getSourceAddressEnd();
```

- *Type:* java.lang.String

---

##### `sourceAddressStart`<sup>Required</sup> <a name="sourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart"></a>

```java
public java.lang.String getSourceAddressStart();
```

- *Type:* java.lang.String

---

##### `sourcePortEnd`<sup>Required</sup> <a name="sourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd"></a>

```java
public java.lang.String getSourcePortEnd();
```

- *Type:* java.lang.String

---

##### `sourcePortStart`<sup>Required</sup> <a name="sourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart"></a>

```java
public java.lang.String getSourcePortStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|FirewallRulesFirewallRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>

---



